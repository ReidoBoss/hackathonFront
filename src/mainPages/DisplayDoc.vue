<template>
    <div v-html="docxContent"></div>
</template>

<script setup>
import {ref,onMounted} from "vue";
import mammoth from 'mammoth';

onMounted(()=>{
    getDoc();
});
const docxContent = ref('');

const getDoc = async () => {
    const response = await fetch('http://localhost:8080/getUserImage/1');
    const data = await response.json();

    const docxBlob = data[0].image.data;
    docxContent.value = await convertBlobToHtml(docxBlob);
    console.log(docxContent.value);
}

const convertBlobToHtml = (docxBytes) => {
    return new Promise((resolve, reject) => {
        if (docxBytes) {
            const uint8Array = new Uint8Array(docxBytes);
            const blob = new Blob([uint8Array], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            
            reader.onloadend = () => {
                const arrayBuffer = reader.result;
                mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                    .then(result => {
                        resolve(result.value); // result.value contains the HTML content
                    })
                    .catch(error => {
                        reject(error);
                    });
            };

            reader.onerror = (error) => {
                reject(error);
            };
        } else {
            reject(new Error("No DOCX bytes provided"));
        }
    });
};



</script>