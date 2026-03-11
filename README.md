# Audio Transcriber

Audio Transcriber is a Spring Boot application that leverages Spring AI and OpenAI's
Whisper model to transcribe audio files into text. Simply upload an audio file through
the REST API and get back an accurate text transcription. API keys are managed securely
via environment variables and are never hardcoded.

Built with Spring AI + OpenAI + React (Vite).

## Project Structure

```
audio-transcriber/
├── src/                          # Spring Boot backend (Java)
├── audio-transcribe-frontend/    # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│   ├── index.html
│   └── vite.config.js
├── pom.xml
└── README.md
```

## Backend Setup

1. Clone the repo
2. Set the environment variable:

```
OPENAI_API_KEY=your-key-here
```

3. Run the application (defaults to `http://localhost:8080`)

## Frontend Setup

1. Navigate to the frontend directory:

```
cd audio-transcribe-frontend
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

The frontend connects directly to the backend at `http://localhost:8080`. Make sure the backend is running before starting the frontend.
