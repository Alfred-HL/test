# Gemini CLI 啟動說明

本文件說明了啟動 Gemini CLI 的幾種常見方式。請根據您的具體設定選擇最適合的方法。

## 1. 直接執行

如果 Gemini CLI 是一個獨立的可執行檔，您可以直接在終端機中執行它。

```bash
./gemini-cli
```
**注意：** 請將 `gemini-cli` 替換為實際的檔案名稱，並確保該檔案具有執行權限 (`chmod +x <檔案名稱>`)。

## 2. 透過啟動腳本

專案可能包含一個啟動腳本（例如 `start.sh` 或 `run.sh`），它會處理所有必要的設定和環境變數。

```bash
bash start.sh
```

## 3. 使用套件管理器

如果 Gemini CLI 是透過套件管理器（如 npm、pip、go等）安裝的，您可以使用對應的命令來執行。

### 範例：Node.js (npm)
如果這是一個 Node.js 專案，您可能會使用 `package.json` 中定義的腳本：
```bash
npm start
```

### 範例：Python (pip)
如果它被安裝為一個 Python 套件，您可能可以直接執行其命令：
```bash
gemini-cli
```

## 4. 使用 Docker

如果應用程式被容器化，您可以使用 Docker 來啟動。

```bash
# 首先，建立 Docker 映像 (如果需要)
docker build -t gemini-cli-app .

# 接著，執行容器
docker run -it gemini-cli-app
```

請根據您的專案實際情況，參考相關的 `README.md` 或其他說明文件以獲得最準確的啟動指令。
