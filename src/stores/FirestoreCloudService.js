import axios from 'axios';

export default class FirestoreCloudService {

  constructor( collectionName ) {

    this.apiKey = 'AIzaSyDkAyP70-ee-nxfiKcuEIhRvyQDjLtEMu8';
    this.projectId = 'telemetryfp';
    this.collectionName = collectionName;
  }

  async addData(data) {
    
    try {
      const response = await axios.post(
        `https://firestore.googleapis.com/v1/projects/${this.projectId}/databases/(default)/documents/${this.collectionName}?key=${this.apiKey}`,
        { fields: data }
      );
      console.log("Document added with ID:", response.data.name);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  }
}
