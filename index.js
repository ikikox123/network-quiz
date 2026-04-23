// 完整 125 題題庫數據 (由 Python 解析提取)
const MASTER_DB = [
    { q: "OSI 七層模型中，實體層屬於第幾層？", o: ["第 1 層", "第 2 層", "第 3 層", "第 4 層"], a: 0 },
    { q: "實體層的主要關注焦點是什麼？", o: ["位元流（Bit Stream）在實際物理通道上的傳輸", "封包路由", "應用程式邏輯", "資料格式轉換"], a: 0 },
    { q: "類比頻寬的定義是什麼？", o: ["訊號可使用的頻率範圍，公式為：頻寬 = 最高頻率 - 最低頻率，單位為 Hz", "每秒傳輸的位元數", "訊號的振幅大小", "訊號的相位變化"], a: 0 },
    { q: "若一個類比訊號的最低頻率為 1000Hz，最高頻率為 5000Hz，請問其類比頻寬是多少？", o: ["4000Hz", "6000Hz", "5000Hz", "1000Hz"], a: 0 },
    { q: "鮑率（Baud）的定義是什麼？", o: ["訊號每秒鐘變化的次數，單位為 Baud", "每秒傳送的位元數", "訊號的頻率範圍", "每秒傳送的字元數"], a: 0 },
    { q: "bps 與 Baud 的換算公式為何？", o: ["bps = Baud × log₂(levels)", "bps = Baud / log₂(levels)", "bps = Baud + log₂(levels)", "bps = Baud * levels"], a: 0 },
    { q: "在一個擁有 4 個訊號位準、鮑率為 1000 的系統中，傳輸速率為多少 bps？", o: ["2000 bps", "1000 bps", "4000 bps", "500 bps"], a: 0 },
    { q: "一個數位傳輸系統的鮑率為 1200，每個訊號包含 3 個位元，傳輸速率為多少 bps？", o: ["3600 bps", "1200 bps", "2400 bps", "4800 bps"], a: 0 },
    { q: "8 bits 等於多少 Byte？", o: ["1 Byte", "8 Bytes", "2 Bytes", "0.5 Byte"], a: 0 },
    { q: "MB/s 與 Mbps 的換算公式為何？", o: ["MB/s = Mbps ÷ 8", "MB/s = Mbps × 8", "MB/s = Mbps + 8", "MB/s = Mbps - 8"], a: 0 },
    { q: "8 Mbps 等於多少 MB/s？", o: ["1 MB/s", "8 MB/s", "64 MB/s", "0.5 MB/s"], a: 0 },
    { q: "100 Mbps 等於多少 MB/s？", o: ["12.5 MB/s", "10 MB/s", "80 MB/s", "100 MB/s"], a: 0 },
    { q: "1 Gbps 等於多少 MB/s？", o: ["125 MB/s", "1000 MB/s", "100 MB/s", "800 MB/s"], a: 0 },
    { q: "若下載速度為 16 MB/s，換算成 Mbps 是多少？", o: ["128 Mbps", "16 Mbps", "2 Mbps", "8 Mbps"], a: 0 },
    { q: "在一個擁有 256 個訊號位準的系統中，每一個 Baud 代表多少個位元？", o: ["8 bits", "256 bits", "16 bits", "4 bits"], a: 0 },
    { q: "若傳輸速率需達 4800 bps，鮑率限制在 1200 Baud，至少需要多少個訊號位準？", o: ["16 個", "4 個", "8 個", "32 個"], a: 0 },
    { q: "小明有一張 4GB 的記憶卡，以穩定 100 Mbps 速率寫入，理論上存滿需多久？", o: ["約 320 秒", "約 40 秒", "約 400 秒", "約 80 秒"], a: 0 },
    { q: "若系統鮑率為 2000 Baud，傳輸速率為 12000 bps，該訊號使用了幾個位準？", o: ["64 個", "6 個", "32 個", "128 個"], a: 0 },
    { q: "1 Gbps 的網路理論上每秒可以傳輸多少 MB 的資料？", o: ["125 MB", "1000 MB", "100 MB", "500 MB"], a: 0 },
    { q: "基頻傳輸（Baseband）通常用於什麼環境？", o: ["區域網路（LAN），同一時間僅傳送 1 個訊號", "廣域網路", "衛星通訊", "無線廣播"], a: 0 },
    { q: "寬頻傳輸（Broadband）目前通俗定義的速度門檻為何？", o: ["128 Kbps 以上", "1 Mbps 以上", "56 Kbps 以上", "10 Mbps 以上"], a: 0 },
    { q: "窄頻撥接式數據機的極限速率為多少？", o: ["56 Kbps", "128 Kbps", "64 Kbps", "1 Mbps"], a: 0 },
    { q: "曼徹斯特編碼（Manchester Encoding）最早應用於哪種網路？", o: ["早期的乙太網路（Ethernet）", "權杖環網路", "光纖網路", "WiFi"], a: 0 },
    { q: "曼徹斯特編碼中，「0」的判斷規則是什麼？", o: ["位元中間由低電位跳變為高電位", "位元中間由高電位跳變為低電位", "位元開始處有跳變", "位元開始處無跳變"], a: 0 },
    { q: "曼徹斯特編碼中，「1」的判斷規則是什麼？", o: ["位元中間由高電位跳變為低電位", "位元中間由低電位跳變為高電位", "位元開始處有跳變", "位元開始處無跳變"], a: 0 },
    { q: "曼徹斯特編碼的主要缺點是什麼？", o: ["極性敏感，正負線接反則 0/1 顛倒", "頻寬利用率低", "不具備同步功能", "抗干擾能力差"], a: 0 },
    { q: "差異曼徹斯特編碼（Differential Manchester）的判斷規則為何？", o: ["位元開始時有跳變為 0，無跳變為 1", "位元中間有無跳變", "依據絕對電位高低", "位元結束時的電位"], a: 0 },
    { q: "差異曼徹斯特編碼應用於哪種網路？", o: ["權杖環網路（Token Ring）", "乙太網路", "數據機通訊", "藍牙"], a: 0 },
    { q: "差異曼徹斯特相較於曼徹斯特編碼最大的優點是什麼？", o: ["極性不敏感（Polarity Insensitive）", "傳輸速度快", "電路設計簡單", "節省能源"], a: 0 },
    { q: "PCM（脈碼調變）由哪三個步驟組成？", o: ["取樣 + 量化 + 編碼", "調幅 + 調頻 + 調相", "壓縮 + 加密 + 傳輸", "分集 + 多工 + 解調"], a: 0 },
    { q: "奈奎斯特定理（Nyquist Theorem）的公式及意義為何？", o: ["取樣頻率 fs ≥ 2f", "取樣頻率 fs = f", "取樣頻率 fs < 2f", "與頻率無關"], a: 0 },
    { q: "標準數位語音電話的頻寬為多少 Kbps？", o: ["64 Kbps", "128 Kbps", "32 Kbps", "256 Kbps"], a: 0 },
    { q: "PAM（脈衝振幅調變）在 PCM 中處於哪個階段？", o: ["取樣後、編碼前的中間產物", "最後的數位輸出", "量化後的結果", "調變前的原始訊號"], a: 0 },
    { q: "資料鏈結層屬於 OSI 七層模型的第幾層？", o: ["第 2 層", "第 1 層", "第 3 層", "第 4 層"], a: 0 },
    { q: "資料鏈結層負責處理哪兩個節點之間的通訊？", o: ["相鄰節點之間", "端到端之間", "跨網路之間", "應用程式之間"], a: 0 },
    { q: "資料鏈結層的主要運作方法不包括下列何者？", o: ["路由控制", "訊框控制", "錯誤控制", "流量控制"], a: 0 },
    { q: "非同步傳輸的封包結構通常包含？", o: ["START | DATA | STOP", "HEADER | DATA | TRAILER", "SYNC | DATA | CRC", "ADDRESS | DATA | LENGTH"], a: 0 },
    { q: "同步傳輸的封包結構通常包含？", o: ["Address | Length | DATA", "START | DATA | STOP", "SYNC | SYNC | DATA", "僅包含 DATA"], a: 0 },
    { q: "乙太網路訊框的結構中，用於錯誤偵測的部分是？", o: ["Frame Check Sequence (FCS)", "Preamble", "Address", "Length"], a: 0 },
    { q: "奇同位（Odd Parity）的定義是什麼？", o: ["確保一組資料中「1」的總數為奇數", "確保「1」的總數為偶數", "確保「0」的總數為奇數", "確保資料長度為奇數"], a: 0 },
    { q: "偶同位（Even Parity）的定義是什麼？", o: ["確保一組資料中「1」的總數為偶數", "確保「1」的總數為奇數", "確保「0」的總數為偶數", "確保資料長度為偶數"], a: 0 },
    { q: "電腦通常使用什麼運算來實作 Parity Check？", o: ["XOR（互斥或）", "AND", "OR", "NOT"], a: 0 },
    { q: "計算奇同位：DATA = 1011，同位元應為？", o: ["0", "1", "不需要", "無法計算"], a: 0 },
    { q: "計算偶同位：DATA = 1101，同位元應為？", o: ["1", "0", "不需要", "無法計算"], a: 0 },
    { q: "Checksum（總和檢查碼）的基本原理為何？", o: ["資料相加後取 1 補數", "資料相乘後取餘數", "計算 1 的個數", "使用多項式除法"], a: 0 },
    { q: "1 補數（1's Complement）的運算方式為何？", o: ["將每個位元反轉 (0變1, 1變0)", "加 1", "減 1", "取絕對值"], a: 0 },
    { q: "Checksum 範例：Data = 1011 和 1001，其 Checksum 為？", o: ["1010", "0101", "1111", "0000"], a: 0 },
    { q: "CRC（循環冗餘檢查）的基本原理為何？", o: ["模二除法（使用 XOR）", "簡單加法", "奇偶校驗", "漢明碼"], a: 0 },
    { q: "乙太網路使用哪種錯誤偵測方法？", o: ["CRC", "Parity", "Checksum", "Hamming"], a: 0 },
    { q: "CRC-32 主要用於哪種場合？", o: ["乙太網路訊框錯誤偵測", "磁碟存取", "記憶體校驗", "CPU 指令檢查"], a: 0 },
    { q: "CRC 範例：Data = 101110，除數 = 1010，被除數應補幾個 0？", o: ["3 個", "4 個", "2 個", "1 個"], a: 0 },
    { q: "LRC（縱向冗餘檢查）與 RAC（列與行檢查）的差異？", o: ["RAC 縱橫都檢查，LRC 只檢查縱向", "LRC 縱橫都檢查，RAC 只檢查縱向", "兩者完全相同", "兩者都不具備更正功能"], a: 0 },
    { q: "LRC/RAC 的主要優點是什麼？", o: ["可以自動更正錯誤", "計算速度最快", "節省頻寬", "安全性最高"], a: 0 },
    { q: "漢明距離（Hamming Distance）的定義為何？", o: ["兩字串 XOR 後 1 的個數", "兩字串的長度差", "兩字串相同位元的個數", "兩字串的總長度"], a: 0 },
    { q: "計算漢明距離：A = 1011101，B = 1001001，距離為？", o: ["2", "3", "1", "4"], a: 0 },
    { q: "漢明碼（Hamming Code）的主要目的是什麼？", o: ["偵測並修正位元錯誤", "壓縮資料", "加密通訊", "增加傳輸速率"], a: 0 },
    { q: "漢明碼中，若資料位元 m = 8，校驗位元 r 需多少？", o: ["4", "3", "5", "2"], a: 0 },
    { q: "漢明碼中，校驗位元放置在哪些位置？", o: ["2 的次方位置 (1, 2, 4, 8...)", "資料最後面", "資料最前面", "隨機位置"], a: 0 },
    { q: "停止並等待（Stop-and-Wait）的傳送視窗大小為？", o: ["1", "無限大", "可變", "與接收端相同"], a: 0 },
    { q: "回退 N 步（Go-back-N）發生錯誤時？", o: ["從錯誤點起全部重傳", "只重傳錯誤那一幀", "停止傳輸", "跳過錯誤繼續"], a: 0 },
    { q: "選擇性重傳（Selective Repeat）發生錯誤時？", o: ["僅重傳出錯的特定訊框", "全部重傳", "重新建立連線", "不處理"], a: 0 },
    { q: "三種重傳協定中，效率最高的是？", o: ["選擇性重傳", "停止並等待", "回退 N 步", "三者相同"], a: 0 },
    { q: "流量控制（Flow Control）的核心目的是？", o: ["防止接收端緩衝區溢位", "增加頻寬", "減少延遲", "加密資料"], a: 0 },
    { q: "乙太網路命名中「Base」代表什麼？", o: ["Baseband（基頻）", "Basic（基礎）", "Broadband（寬頻）", "Base station"], a: 0 },
    { q: "雙絞線通常搭配哪種接頭？", o: ["RJ45", "RJ11", "BNC", "ST"], a: 0 },
    { q: "UTP 的最大理論傳輸距離為多少？", o: ["100 公尺", "500 公尺", "1 公里", "50 公尺"], a: 0 },
    { q: "Cat5 雙絞線支援的速率為？", o: ["100 Mbps 以上", "10 Mbps", "1 Gbps", "10 Gbps"], a: 0 },
    { q: "STP 與 UTP 的主要差異？", o: ["STP 有金屬遮蔽層減少干擾", "UTP 速度較快", "STP 比較便宜", "UTP 距離較遠"], a: 0 },
    { q: "粗同軸電纜（10Base5）的傳輸距離為？", o: ["500 公尺", "100 公尺", "185 公尺", "1 公里"], a: 0 },
    { q: "細同軸電纜（10Base2）的傳輸距離為？", o: ["185 公尺", "500 公尺", "100 公尺", "200 公尺"], a: 0 },
    { q: "多模光纖（MMF）與單模光纖（SMF）誰傳得遠？", o: ["單模光纖 (SMF)", "多模光纖 (MMF)", "兩者相同", "視情況而定"], a: 0 },
    { q: "單模光纖通常使用什麼光源？", o: ["雷射 (Laser)", "LED", "白熾燈", "螢光"], a: 0 },
    { q: "FTTH 代表什麼？", o: ["光纖到家戶", "光纖到大樓", "光纖到路邊", "光纖到中心"], a: 0 },
    { q: "無線電波傳輸的主要特性？", o: ["穿透力強，全向性傳輸", "直線傳播，無法穿牆", "需要對準方向", "僅限短距離"], a: 0 },
    { q: "GEO 同步軌道衛星的延遲約為？", o: ["270 毫秒", "10 毫秒", "1 秒", "50 毫秒"], a: 0 },
    { q: "紅外線傳輸的主要特點？", o: ["直線傳播，無法穿牆，安全性高", "穿透力強", "全向性", "適合長距離"], a: 0 },
    { q: "類比調變中，AM 代表？", o: ["調幅", "調頻", "調相", "數位調變"], a: 0 },
    { q: "QAM（正交振幅調變）結合了？", o: ["振幅與相位調變", "頻率與相位調變", "振幅與頻率調變", "所有類比調變"], a: 0 },
    { q: "平行傳送（Parallel Transmission）的特點？", o: ["多條線同時傳送多個位元", "單條線依序傳送", "不需要同步", "僅限無線傳輸"], a: 0 },
    { q: "等時傳送（Isochronous Transmission）常用於？", o: ["即時多媒體資料 (音訊/視訊)", "電子郵件", "網頁瀏覽", "檔案下載"], a: 0 },
    { q: "ADSL 的頻寬特性？", o: ["下載 > 上傳 (不對稱)", "上傳 = 下載", "上傳 > 下載", "完全隨機"], a: 0 },
    { q: "T1 的傳輸速率為？", o: ["1.544 Mbps", "2.048 Mbps", "44.736 Mbps", "100 Mbps"], a: 0 },
    { q: "E1 的傳輸速率為？", o: ["2.048 Mbps", "1.544 Mbps", "45 Mbps", "10 Mbps"], a: 0 },
    { q: "OC-1 的速率為？", o: ["51.84 Mbps", "155 Mbps", "622 Mbps", "1 Gbps"], a: 0 },
    { q: "電路交換（Circuit Switching）的主要缺點？", o: ["不通話時線路閒置，浪費資源", "延遲太高", "封包容易遺失", "安全性低"], a: 0 },
    { q: "封包交換（Packet Switching）的優點？", o: ["切割封包確保公平性", "保證專用線路", "無延遲", "不需要路由"], a: 0 },
    { q: "CSMA/CD 用於？", o: ["有線乙太網路", "WiFi", "藍牙", "4G/5G"], a: 0 },
    { q: "CSMA/CA 用於？", o: ["WiFi", "有線乙太網路", "光纖", "電話線"], a: 0 },
    { q: "Multicast（群播）的傳送對象是？", o: ["特定群組成員", "所有人", "單一對象", "隨機對象"], a: 0 },
    { q: "MAC 地址共有幾個 bytes？", o: ["6 bytes", "4 bytes", "8 bytes", "2 bytes"], a: 0 },
    { q: "IEEE 802.3 對應什麼技術？", o: ["乙太網路", "Wi-Fi", "藍牙", "WiMax"], a: 0 },
    { q: "環狀拓樸如何避免碰撞？", o: ["使用權杖 (Token)", "先聽再送", "預約時段", "中央控制"], a: 0 },
    { q: "星狀拓樸的最大風險？", o: ["中央裝置故障導致全網中斷", "佈線困難", "成本太高", "速度太慢"], a: 0 },
    { q: "網狀拓樸的主要優點？", o: ["穩定性最高，路徑中斷可自動繞道", "成本最低", "最容易安裝", "速度最快"], a: 0 },
    { q: "ADSL 分離器 (Splitter) 的作用？", o: ["分開電話語音與數據訊號", "增加頻寬", "提高安全性", "轉換電壓"], a: 0 },
    { q: "取樣頻率 8000Hz，8位元量化，速率為？", o: ["64 Kbps", "128 Kbps", "32 Kbps", "256 Kbps"], a: 0 },
    { q: "OC-3 的速度是 OC-1 的幾倍？", o: ["3 倍", "2 倍", "4 倍", "12 倍"], a: 0 },
    { q: "RJ45 接頭有幾個銅片？", o: ["8 個", "4 個", "6 個", "10 個"], a: 0 },
    { q: "下列何者抗噪性最強？", o: ["FM", "AM", "ASK", "都不強"], a: 0 },
    { q: "CSMA/CA 中的 RTS 代表？", o: ["Request To Send", "Ready To Send", "Receive To Send", "Router To Server"], a: 0 },
    { q: "CSMA/CA 中的 CTS 代表？", o: ["Clear To Send", "Confirm To Send", "Check To Send", "Call To Send"], a: 0 },
    { q: "下列何種媒體傳輸距離最遠？", o: ["單模光纖", "多模光纖", "同軸電纜", "雙絞線"], a: 0 },
    { q: "VDSL 速度最高可達？", o: ["52-100 Mbps", "10 Mbps", "1.5 Mbps", "1 Gbps"], a: 0 },
    { q: "SDSL 的特點？", o: ["上下傳對稱", "下載快上傳慢", "僅限語音", "不需要線路"], a: 0 },
    { q: "T3 的速率約為？", o: ["45 Mbps", "1.5 Mbps", "155 Mbps", "10 Mbps"], a: 0 },
    { q: "OSI 模型中哪一層處理 Port Number？", o: ["傳輸層", "網路層", "應用層", "實體層"], a: 0 },
    { q: "OSI 模型中哪一層處理 IP Address？", o: ["網路層", "資料鏈結層", "傳輸層", "實體層"], a: 0 },
    { q: "OSI 模型中哪一層處理 MAC Address？", o: ["資料鏈結層", "網路層", "實體層", "傳輸層"], a: 0 },
    { q: "哪種多工技術使用不同頻率？", o: ["FDM", "TDM", "CDM", "WDM"], a: 0 },
    { q: "哪種多工技術使用不同時間片段？", o: ["TDM", "FDM", "CDM", "WDM"], a: 0 },
    { q: "哪種多工技術使用正交碼？", o: ["CDM", "FDM", "TDM", "WDM"], a: 0 },
    { q: "光纖通訊常用的多工技術？", o: ["WDM", "FDM", "TDM", "CDM"], a: 0 },
    { q: "二元指數退後演算法最大重試次數？", o: ["16 次", "10 次", "32 次", "無限次"], a: 0 },
    { q: "10Base2 的 10 代表？", o: ["10 Mbps", "10 公尺", "10 條線", "10 號線"], a: 0 },
    { q: "100Base-TX 的 TX 代表？", o: ["雙絞線", "光纖", "同軸電纜", "無線"], a: 0 },
    { q: "下列何者為區域網路標準？", o: ["IEEE 802", "TCP/IP", "OSI", "HTTP"], a: 0 },
    { q: "CRC 運算主要依賴？", o: ["多項式除法", "矩陣運算", "查表法", "隨機數"], a: 0 },
    { q: "Checksum 主要應用於？", o: ["TCP/IP 標頭校驗", "乙太網路訊框", "硬碟扇區", "WiFi 加密"], a: 0 },
    { q: "RS-232 主要用於？", o: ["非同步串列傳輸", "高速網路", "平行傳輸", "無線傳輸"], a: 0 },
    { q: "下列何者不屬於引導式傳輸媒介？", o: ["無線電波", "光纖", "雙絞線", "同軸電纜"], a: 0 },
    { q: "光在光纖中傳輸是利用？", o: ["全反射", "折射", "繞射", "直線前進"], a: 0 },
    { q: "下列何者延遲最低？", o: ["光纖", "衛星", "微波", "電話線"], a: 0 },
    { q: "ADSL 低頻段用於？", o: ["電話語音", "上傳數據", "下載數據", "控制訊號"], a: 0 },
    { q: "乙太網路最小訊框長度是為了？", o: ["偵測碰撞", "節省頻寬", "提高速度", "相容舊設備"], a: 0 },
    { q: "哪種拓樸增加節點最容易？", o: ["匯流排 (Bus)", "環狀 (Ring)", "網狀 (Mesh)", "全連接"], a: 0 }
];

let quizPool = [];
let currentIndex = 0;
let score = 0;
let currentQuestionData = null; // 儲存當前題目（含打亂後的選項）

function startQuiz() {
    // 洗牌並抽 25 題
    quizPool = [...MASTER_DB].sort(() => Math.random() - 0.5).slice(0, 25);
    currentIndex = 0;
    score = 0;

    document.getElementById('start-view').style.display = 'none';
    document.getElementById('result-view').style.display = 'none';
    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('stats-container').style.display = 'block';

    renderQuestion();
    updateStats();
}

function renderQuestion() {
    const rawData = quizPool[currentIndex];
    const qText = document.getElementById('question-text');
    const oBox = document.getElementById('options-box');

    // 隨機打亂選項
    const optionsWithIndex = rawData.o.map((text, index) => ({ text, originalIndex: index }));
    optionsWithIndex.sort(() => Math.random() - 0.5);

    // 儲存當前題目數據，方便判斷正確答案
    currentQuestionData = {
        question: rawData.q,
        shuffledOptions: optionsWithIndex,
        originalCorrectIndex: rawData.a
    };

    qText.innerText = `Q${currentIndex + 1}: ${currentQuestionData.question}`;
    oBox.innerHTML = '';

    currentQuestionData.shuffledOptions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(i, btn);
        oBox.appendChild(btn);
    });
}

function selectOption(selectedIndex, btn) {
    const btns = document.querySelectorAll('.opt-btn');
    // 禁用所有按鈕，不可改答案
    btns.forEach(b => b.style.pointerEvents = 'none');

    const selectedOpt = currentQuestionData.shuffledOptions[selectedIndex];
    const isCorrect = selectedOpt.originalIndex === currentQuestionData.originalCorrectIndex;

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        // 找出正確答案的按鈕並標示
        currentQuestionData.shuffledOptions.forEach((opt, i) => {
            if (opt.originalIndex === currentQuestionData.originalCorrectIndex) {
                btns[i].classList.add('correct');
            }
        });
    }

    updateStats();

    // 延遲後進入下一題
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizPool.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 800);
}

function updateStats() {
    const total = 25;
    const progress = (currentIndex / total) * 100;
    document.getElementById('stats-text').innerText = `已刷: ${currentIndex} / ${total} (${Math.round(progress)}%)`;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function showResult() {
    document.getElementById('quiz-view').style.display = 'none';
    document.getElementById('result-view').style.display = 'block';

    const finalScore = Math.round((score / quizPool.length) * 100);
    document.getElementById('score-val').innerText = finalScore;

    let msg = "";
    if (finalScore === 100) msg = "完美的刷題機器！";
    else if (finalScore >= 80) msg = "這波穩了，繼續保持！";
    else if (finalScore >= 60) msg = "及格了，再加油一點！";
    else msg = "需要多加練習喔！";

    document.getElementById('comment-text').innerText = msg;
    
    // 儲存歷史紀錄
    saveHistory(finalScore);
}

function saveHistory(score) {
    const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    const date = new Date().toLocaleString();
    history.unshift({ score, date });
    if (history.length > 5) history.pop();
    localStorage.setItem('quiz_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    const box = document.getElementById('recent-history');
    box.innerHTML = '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerText = `${item.date} - 分數: ${item.score}`;
        box.appendChild(div);
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

window.onload = () => {
    renderHistory();
    document.getElementById('stats-container').style.display = 'none';
};
