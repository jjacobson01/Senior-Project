import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import {
    FormInput,
    TextButton,
    TextIconButton
} from "../../components"
import { utils } from "../../utils";
import { auth } from "./firebase";
const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    // handle sign up button
    const handleSignUp = () => {

            auth.createUserWithEmailAndPassword(email, password)
                .then(() => {   // create user
                    auth.currentUser.updateProfile({
                        displayName: username
                    })
                    console.log('Register with: ',user.email)
                    navigation.navigate("Home")
                })
                .catch(error => {
                    console.log(error)
                })
    }




    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == ""
    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.height > 800 ? SIZES.radius : 0
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius
                }}
            >
                <FormInput
                    placeholder="john.doe6@utrgv.edu"
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        // utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                // source={(email == "") || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                source={(email == "") || (email != "" && emailError == "") ? null : null}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    placeholder="john.doe"
                    label="Username"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={username}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                // source={(username == "") || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                source={(username == "") || (username != "" && usernameError == "") ? null : null }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (username == "") ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    placeholder="********"
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={password}
                    onChange={(value) => {
                        // utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                // source={showPass ? icons.eye_close : icons.eye}
                                source={showPass ? null : null}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Sign Up & Sign In */}
                <TextButton
                    label="Sign Up"
                    disabled={isEnableSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary,
                    }}
                    // Do not Show OTP screen
                    // onPress={() => navigation.navigate("Otp")}
                    onPress={handleSignUp}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Already have an account? </Text>
                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                {/* <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => navigation.replace("Home")}
                /> */}

                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.outlook}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Continue With Outlook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => navigation.replace("Home")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp