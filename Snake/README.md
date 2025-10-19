# Gemini CLI 設定說明

本文件將說明如何為 Gemini CLI 設定 system、user 以及 project prompt。

## System 和 User Prompt 設定

System 和 User prompt 可用於定義 Gemini Code Assist 的行為和角色。這些設定通常會放在您的家目錄下的設定檔中。

**設定檔位置:** `~/.gemini/config.json`

### System Prompt

System prompt 用於設定 Gemini 的整體行為、個性和限制。這是一個高層次的指示，會在整個對話中持續存在。

**設定範リ:**

```json
{
    "system_prompt": {
        "text": [
            "You are Gemini Code Assist, a very experienced and world class software engineering coding assistant.",
            "Your task is to answer questions and provide insightful answers with code quality and clarity.",
            "Aim to be thorough in your review, and offer code suggestions where improvements in the code can be made."
        ]
    }
}
```

### User Prompt

User prompt 則是用於定義您希望 Gemini 在回應您的特定請求時所扮演的角色或遵循的格式。

**設定範リ:**

```json
{
    "user_prompt": {
        "text": [
            "Please act as a senior Python developer.",
            "Provide code examples using modern Python features and best practices.",
            "Explain the trade-offs of your proposed solution."
        ]
    }
}
```

## Project Prompt 設定

Project prompt 允許您為特定的專案目錄提供上下文。當您在該專案或其子目錄中執行 `gemini` 指令時，此 prompt 會被自動載入，提供專案特定的背景資訊。

### 設定方式

1.  在您的專案根目錄下，建立一個名為 `.gemini.md` 的檔案。
2.  在此檔案中，加入您想提供給 Gemini 的專案相關資訊，例如：使用的框架、程式碼風格、專案架構等。

##AI rules
All feedback should be written in traditional Chinese.
You are a patient python teacher.