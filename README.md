# AI Text Summarizer

This project is an AI Text Summarizer that utilizes the Hugging Face API. It has been developed using Postman for API testing and an Express server for handling requests.

## Live Demo

Check out the live demo [here](https://ai-text-summarize.netlify.app/){:target="_blank"}.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Local Development](#local-development)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js and npm installed
- Postman account and API key
- Hugging Face API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kumarguddu609/ai-text-summarizer.git
   ```

2. Install dependencies:

   ```bash
   cd ai-text-summarizer
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```env
   API_KEY=your-hugging-face-api-key
   ```

## Usage

- Start the server:
  ```bash
  npm start
  ```
- Open Postman and import the provided collection (`AI-Text-Summarizer.postman_collection.json`).
- Update the environment variables in Postman with your keys.

## Local Development

For local development, use the following commands:

- Start the server in watch mode:
  ```bash
  npm run dev
  ```

## API Documentation

- [Hugging Face API Documentation](https://huggingface.co/docs)

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

```

Remember to replace placeholders like `your-username` with your actual GitHub username and adjust details based on your project's structure and requirements.
```
