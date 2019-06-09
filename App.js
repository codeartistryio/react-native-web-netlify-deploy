import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button
} from "react-native";
import randomQuote from "random-quotes";

export default function App() {
  const [quote, setQuote] = React.useState(null);

  React.useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setQuote(randomQuote(1));
  }

  return (
    <View style={styles.container}>
      {!quote ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={{ fontSize: 24, fontWeight: "800" }}>{quote.body}</Text>
          <Text style={{ fontSize: 18, fontWeight: "200", margin: 20 }}>
            {quote.author}
          </Text>
          <Button title="New Quote" onPress={getQuote} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
