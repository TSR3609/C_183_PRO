import React from "react"
import { StyleSheet, View,Text,SafeAreaView,StatusBar,Platform } from "react-native"
import { Camera } from "expo-camera"
import * as Permissions from "expo-permissions"
import * as FaceDetector from "expo-face-detector"
import { TouchableOpacity } from "react-native-web"
let data = [
    {
        "id" : "1",
        "img" : require('../assets/PRO-LookMeAppFilters-main/crown-pic1.png')
    },
    {
        "id" : "2",
        "img" : require('../assets/PRO-LookMeAppFilters-main/crown-pic2.png')
    },
    {
        "id" : "3",
        "img" : require('../assets/PRO-LookMeAppFilters-main/crown-pic3.png')
    },
    {
        "id" : "4",
        "img" : require('../assets/PRO-LookMeAppFilters-main/flower-pic1.png')
    },
    {
        "id" : "5",
        "img" : require('../assets/PRO-LookMeAppFilters-main/flower-pic2.png')
    },
    {
        "id" : "6",
        "img" : require('../assets/PRO-LookMeAppFilters-main/flower-pic3.png')
    },
    {
        "id" : "7",
        "img" : require('../assets/PRO-LookMeAppFilters-main/hat-pic1.png')
    },
    {
        "id" : "8",
        "img" : require('../assets/PRO-LookMeAppFilters-main/hat-pic2.png')
    },
    {
        "id" : "9",
        "img" : require('../assets/PRO-LookMeAppFilters-main/other-pic1.png')
    },
    {
        "id" : "10",
        "img" : require('../assets/PRO-LookMeAppFilters-main/other-pic2.png')
    }
]
export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasCameraPermission:null,faces:[],
        current_filter:"filter_1"
    }
    this.onCameraPermission = this.onCameraPermission.bind(this)
    this.onFaceDetected = this.onFaceDetected.bind(this)
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }
    componentDidMount(){
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission)
    }
    onCameraPermission({status}){
        this.setState({hasCameraPermission:status === "granted"})
    }
    onFaceDetected({faces}){
        this.setState({faces:faces})
    }
    onFaceDetectionError({error}){
        console.log(error)
    }
    render(){
        if(hasCameraPermission === null){
        return
            <View/>
        }
        if(hasCameraPermission === false){
            return(
            <View style = {{flex:1}}><Text>No access to Camera....!</Text></View>
            )
        }
        return
           <View style = {styles.container}>
            <SafeAreaView style = {styles.droidSafeArea}/>
            <View style = {styles.headingContainer}><View style = {{flexDirection:"row",flexWrap:"wrap"}}><Text style = {styles.titleText1}>
                
                FR
                </Text>
                <Text style = {styles.titleText2}>App</Text></View><View style = {{flexDirection:"row",flexWrap:"wrap"}}>
                    <Text style  = {styles.subheading1}>Try R</Text>
                    <Text style = {styles.subheading2}>Cool Frames</Text>
                    </View></View>
                    <View style = {styles.cameraStyle}><Camera style = {{flex:1}} type={Camera.Constants.Type.front} 
                    faceDetectorSettings={{mode:FaceDetector.Constants.Mode.fast,detectLandmarks:FaceDetector.Constants.Landmarks.all,runClassification:FaceDetector.Constants.Classifications.all}}
                    onFacesDetected={this.onFacesDetected}onFacesDetectionError={this.onFaceDetectionError}/>
                    {
                        this.state.faces.map(face=>{
                            if(this.state.current_filter === "filter_1"){
                                return <Filter1 key = {face.faceID} face = {face}/>
                            }
                            else if(this.state.current_filter === "filter_2"){
                                return <Filter2 key = {face.faceID} face = {face}/>
                            }
                            else if(this.state.current_filter === "filter_3"){
                                return <Filter3 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_4"){
                                return <Filter4 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_5"){
                                return <Filter5 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_6"){
                                return <Filter6 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_7"){
                                return <Filter7 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_8"){
                                return <Filter8 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_9"){
                                return <Filter9 key = {face.faceID} face = {face}/>
                            }
                            
                            else if(this.state.current_filter === "filter_10"){
                                return <Filter10 key = {face.faceID} face = {face}/>
                            }
                        })
                    }
                    </View>
           
           </View>
           
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    cameraStyle: {
        flex: 0.65
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#6278e4"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20
    }
});