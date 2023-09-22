<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Payload Ionic Vue</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h3 style="margin-left: 16px">Sign In</h3>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonList,
  IonButton,
  IonItem,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonModal,
  IonDatetimeButton,
  IonLabel,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

/**
 *
 */
const handleCreateAccount = async () => {
  try {
  } catch (error: any) {
  }
};

/**
 *
 * @param email
 * @param password
 */
const handleLogin = async (email: string, password: string) => {
};
</script>

<style scoped></style>
