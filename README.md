# Audio Transcriber

Audio Transcriber is a Spring Boot application that leverages Spring AI and OpenAI's
Whisper model to transcribe audio files into text. Simply upload an audio file through
the REST API and get back an accurate text transcription. API keys are managed securely
via environment variables and are never hardcoded.

Built with Spring AI + OpenAI.

## Setup

1. Clone the repo
2. Set the environment variable:
```
   OPENAI_API_KEY=your-key-here
```
3. Run the application