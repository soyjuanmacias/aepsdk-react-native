/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/

import React from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {AEPIdentity, AEPMobileVisitorAuthenticationState} from '@adobe/react-native-aepcore';
import styles from '../styles/styles';

export default Identity = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Button onPress={() => navigation.goBack()} title="Go to main page" />
        <Text style={styles.welcome}>Identity</Text>
        <Button title="extensionVersion()" onPress={identityExtensionVersion}/>
        <Button title="syncIdentifiers()" onPress={syncIdentifiers}/>
        <Button title="syncIdentifiersWithAuthState()" onPress={syncIdentifiersWithAuthState}/>
        <Button title="syncIdentifier()" onPress={syncIdentifier}/>
        <Button title="appendVisitorInfoForURL()" onPress={appendVisitorInfoForURL}/>
        <Button title="getUrlVariables()" onPress={getUrlVariables}/>
        <Button title="getIdentifiers()" onPress={getIdentifiers}/>
        <Button title="getExperienceCloudId()" onPress={getExperienceCloudId}/>
        </ScrollView>
      </View>
  )
}

function identityExtensionVersion() {
  AEPIdentity.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEPIdentity version: " + version));
}
function syncIdentifiers() {
  AEPIdentity.syncIdentifiers({"id1": "identifier1"});
}

function syncIdentifiersWithAuthState() {
  AEPIdentity.syncIdentifiersWithAuthState({"id1": "identifier1"}, "AEP_VISITOR_AUTH_STATE_AUTHENTICATED");
}

function syncIdentifier() {
  AEPIdentity.syncIdentifier("idType", "ID", AEPMobileVisitorAuthenticationState.AUTHENTICATED);
}

function appendVisitorInfoForURL() {
  AEPIdentity.appendVisitorInfoForURL("test.com").then(urlWithVisitorData => console.log("AdobeExperienceSDK: VisitorData = " + urlWithVisitorData));
}

function getUrlVariables() {
  AEPIdentity.getUrlVariables().then(urlVariables => console.log("AdobeExperienceSDK: UrlVariables = " + urlVariables));
}

function getIdentifiers() {
  AEPIdentity.getIdentifiers().then(identifiers => console.log("AdobeExperienceSDK: Identifiers = " + identifiers));
}

function getExperienceCloudId() {
  AEPIdentity.getExperienceCloudId().then(cloudId => console.log("AdobeExperienceSDK: CloudID = " + cloudId));
}