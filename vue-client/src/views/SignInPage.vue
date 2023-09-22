<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Payload Ionic Vue</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h3 style="margin-left: 16px">Sign In</h3>
      <ion-list :inset="true">
        <form @submit.prevent="handleLogin">
          <ion-item>
            <ion-input
              v-model="email"
              name="email"
              label="Email"
              label-placement="stacked"
              type="email"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              v-model="password"
              name="password"
              label="Password"
              label-placement="stacked"
              type="password"
            ></ion-input>
          </ion-item>
          <div class="ion-text-center">
            <ion-button type="submit" fill="clear">Sign In</ion-button>
            <ion-button type="button" fill="clear" @click="router.push('/sign-up')"
              >Create A New Account</ion-button
            >
          </div>
        </form>
      </ion-list>
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
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const router = useRouter();

/**
 *
 */
const handleLogin = async () => {
  try {
    const resp = await fetch("http://localhost:3100/api/customers/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }
    const user = await resp.json();
    console.log(user);

    // goto home
    router.replace("/home");
  } catch (error: any) {
    alert("Sign In Error " + error.message);
  }
};
</script>

<style scoped></style>
