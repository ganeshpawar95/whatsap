import { View, Text, StyleSheet } from "react-native";
import { Modal, Spinner } from "native-base";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
export default function LoadingModal(props) {
  const navigation = useNavigation();
  useEffect(() => {
    if (props.open == true) {
      const timeoutId = setTimeout(() => {
        // props.set_is_stage("stage3");
        props.set_loading(false);
        navigation.navigate("home");
      }, 3000);
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [props.open]);
  return (
    <Modal isOpen={props.open} safeAreaTop={true}>
      <Modal.Content maxWidth="100" borderRadius={20} height={100}>
        <Modal.Body padding={8}>
          <Spinner
            size="lg"
            color={"#0CCC83"}
            style={{
              alignSelf: "center",
            }}
          />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

const styles = StyleSheet.create({});
