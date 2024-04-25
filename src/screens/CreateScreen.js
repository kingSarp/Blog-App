import React, { useContext } from "react";
import {View , Text , StyleSheet} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({route}) => {
    // const {state} = useContext(Context);
    // const BlogPost = state.find((blogPost) => blogPost.id === route.params.id )
//    console.log( route.params.id);
   return(
    <View>
        <Text>Create</Text>
    </View>
   ) ;
};

const styles = StyleSheet.create({

})

export default CreateScreen;