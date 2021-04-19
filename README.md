# JavaScript 工作坊 To Do List
![](https://i.imgur.com/Jyv1Gx4.gif)

## 專案準備及提交
1. fork 此 repo 到自己的 Github ，並 clone 到自己電腦
2. 將 `master` 保護起來，禁止推 master branch
    - 到自己的 repo > Settings > Branches > Branch protection rules > add rule 設定
3. 每個功能都開一個 branch 進行
    - 舉例： `feature/Complete_add_checked_task`
4. 完成後，發 PR 到「自己的 repo」並且自己 merge 進 `master`

## 任務: 完成 To Do List 功能
1. 點擊任務標記是否完成
    - 點擊 li 新增/移除 `checked` class
2. 點擊 x 刪除任務
    - 點擊 span (後面那個 x) 可移除任務
3. 輸入新任務名稱， 按下 + 新增任務
    - 取得 input 輸入的文字
    - 按下 + 可以新增任務（li）
    - 新增的任務也有標記/移除功能
4. (加分題) 將 To Do List 用 localStorage 改寫
    - 所有新增修改刪除都需要更新 localStorage
    - localStorage 的用法可以參考 [localStorage 文件](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/localStorage)

使用原生 JavaScript 實作（不能寫 jQuery！），所有程式都會寫在 main.js 檔，不會修改到其他檔案。
