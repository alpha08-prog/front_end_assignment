import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ErrorMsgProps {
  message: string;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ message }) => (
    <Text style={styles.error}>{message}</Text>
);

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center",
    },
    });

    export default ErrorMsg;
