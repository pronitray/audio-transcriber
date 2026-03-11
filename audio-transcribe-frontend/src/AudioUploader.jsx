import { useState } from "react";
import axios from 'axios';

const AudioUploader = () => {
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return; 

        setIsLoading(true);
        setTranscription("");
        
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/api/transcribe', formData, {
                headers: {
                    'Content-Type':'multipart/form-data', 
                }
            });
            setTranscription(response.data);
        } catch (error) {
            console.error("Error transcribing audio", error);
            setTranscription("An error occurred while transcribing the audio. Please try again."); 
        } finally {
            setIsLoading(false); 
        }
    };

    return(
        <div className="container">
            <h1>Audio To Text Transcriber</h1>
            <div className="file-input">
                <input 
                    type="file" 
                    accept="audio/*" 
                    onChange={handleFileChange} 
                    disabled={isLoading} 
                />
            </div>
            
            <button 
                className="upload-button" 
                onClick={handleUpload}
                disabled={!file || isLoading}
            >
                {isLoading ? "Processing Audio..." : "Upload and Transcribe"}
            </button>
            
            <div className="transcription-result">
                <h2>Transcription Result</h2>
                <p>{transcription}</p>
            </div>
        </div>
    );
}

export default AudioUploader;