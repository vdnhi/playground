import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ArticleCard from "./components/ArticleCard";

import { filterForUniqueArticles } from "./utils";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageReached, setLastPageReached] = useState(false);

  const getNews = useCallback(() => {
    if (lastPageReached) return;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8454553a7bd146609160230362ebfa1f&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        const hasMoreArticles = jsonData.articles.length > 0;
        if (hasMoreArticles) {
          const filteredData = jsonData.articles.filter(
            (article) => article.urlToImage !== null
          );
          const newArticles = filterForUniqueArticles(
            articles.concat(filteredData)
          );
          setArticles(newArticles);
          setPageNumber(pageNumber + 1);
          setLoading(false);
        } else {
          setLastPageReached(true);
        }
      })
      .catch((error) => console.log(error));
  }, [pageNumber, lastPageReached]);

  useEffect(() => {
    getNews();
  }, [articles]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={loading} />
      </View>
    );
  }

  const renderArticleItem = ({ item }) => <ArticleCard item={item} />;

  const renderFooterItem = () =>
    lastPageReached ? (
      <Text style={styles.specialText}>No more articles</Text>
    ) : (
      <ActivityIndicator size="large" loading={loading} />
    );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Articles Count: </Text>
        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={(item) => item.title}
        onEndReached={getNews}
        onEndReachedThreshold={1}
        ListFooterComponent={renderFooterItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    height: 30,
    width: "100%",
    backgroundColor: "pink",
  },
  row: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    color: "grey",
  },
  specialText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10
  }
});
