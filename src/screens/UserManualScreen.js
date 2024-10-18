import React from 'react';
import { ScrollView, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';


const UserManualScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Bliss Q’s User Manual</Text>
            <Text style={styles.subtitle}>Version 1.0 - Release Date: April 2024</Text>

            <Text style={styles.header}>Table of Contents</Text>
            <Text style={styles.text}>1. Introduction</Text>
            <Text style={styles.text}>2. Installation Guide</Text>
            <Text style={styles.text}>3. Functions</Text>
            <Text style={styles.text}>4. System Settings</Text>
            <Text style={styles.text}>5. Troubleshooting</Text>
            <Text style={styles.text}>6. Frequently Asked Questions</Text>
            <Text style={styles.text}>7. Glossary</Text>
            <Text style={styles.text}>8. Customer Support</Text>

            <Text style={styles.header}>1. Introduction</Text>
            <Text style={styles.text}>
                Bliss Q's helps users reflect on themselves daily, designed to help users explore themselves,
                relieve physical and mental stress, and remember past experiences. This manual aims to help
                users quickly master the basic functionalities and advanced tools of the software.
            </Text>

            <Text style={styles.header}>2. Installation Guide</Text>
            <Text style={styles.text}>
                Minimum System Requirements for iOS: iOS 12.0 or later, iPhone 6s or newer, at least 2GB RAM, 
                minimum of 100MB free space.
            </Text>
            <Text style={styles.text}>
                Minimum System Requirements for Android: Android 6.0 (Marshmallow) or later, compatible with
                Android OS 6.0 or newer, at least 2GB RAM, minimum of 100MB free space.
            </Text>
            <Text style={styles.text}>
                Download the latest installer from our Apple/Google shop.
                Double-click on the installation file and follow the on-screen instructions to complete the
                installation. Open the app and start using the program.
            </Text>

            <Text style={styles.header}>3. Functions</Text>
            <Text style={styles.text}>
                3.1 View Questions: This app includes five main modules corresponding to Monday through Friday.
                Each day, users will receive new reminders from different modules to maintain freshness and relevance.
            </Text>
            <Text style={styles.text}>
                3.2 Answer Questions: Users can type their responses in the chat box located under each question.
                The system will record these inputs as answers.
            </Text>
            <Text style={styles.text}>
                3.3 Answer Storage: The app automatically saves all user responses, allowing users to view or delete
                their past answers at any time.
            </Text>
            <Text style={styles.header}>4. System Settings</Text>
            <Text style={styles.text}>
              The app will send daily notifications to remind users to answer new questions, encouraging regular engagement.
            </Text>
            <Text style={styles.header}>5. Troubleshooting</Text>
            <Text style={styles.text}>
              If the app malfunctions, please first ensure your device's operating system is up to date. 
              If the problem persists after updating, consider restarting the app or reinstalling it.
            </Text>
            <Text style={styles.header}>6. Frequently Asked Questions</Text>
            <Text style={styles.text}>
                6.1 Login Requirement: No login is required to use this app, nor does it collect any personal information. 
                If prompted for personal information, please be cautious and protect your privacy.
            </Text>
            <Text style={styles.text}>
                 6.2 Privacy Issues : There are no privacy issues with this app. All data is stored locally on your personal device 
                    and cannot be accessed by others. If you wish to share your data online with others, please look forward to future updates.
                </Text>
                <Text style={styles.text}>
                6.3 Missing Notifications After Download:  If you do not receive any notifications after downloading the app, 
                it may be due to disabled notification settings. Please check the app's notification settings 
                in your device's menu to ensure notifications are enabled.
                </Text>
             <Text style={styles.header}>7.Glossary</Text>
             <Text style={styles.text}>
             7.1 API (Application Programming Interface): A set of rules and definitions that allows software to interact. 
             APIs facilitate data exchange between different software, commonly used to extend app functionalities.
                </Text>
                <Text style={styles.text}>
                7.2 Local Storage: Data storage on the user’s device rather than on remote servers or in the cloud. 
                    This method enhances data security since the data is 
                visible only on the local device and not transmitted over the internet.
                </Text>
                <Text style={styles.text}>
                7.3 Notification Permissions: Settings on a user's device that allow or disallow the app from showing notifications. 
                If these are disabled, the app cannot send notifications.
                </Text>
                <Text style={styles.text}>7.4 Privacy Breach: An instance where personal information or data is accessed or disclosed 
                without the user's consent. This app prevents such issues by storing data locally.
                </Text>
            <Text style={styles.header}>8. Customer Support</Text>
            <Text style={styles.text}>
                Need help with an issue? Please contact our customer service team via email.
                We promise to provide timely and professional assistance to resolve any queries you may have.
                </Text>
            <Text style={styles.footer}>
                Thank you for choosing Bliss Q’s as your companion for daily reflection and self-discovery.
                We hope that this user manual has provided clear guidance on how to use the app effectively.
                Embrace the journey of self-reflection and enjoy the transformative experience that Bliss Q’s
                has to offer.
            </Text>
            <Text style={styles.header}></Text>

        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    footer: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        fontStyle: 'italic',
    },
});


export default UserManualScreen;
