import firebase from 'firebase/app'
// ⬇️ 我们不用写库名也能智能地导入
import 'firebase/auth'

// My web app's Firebase configuration
const firebaseConfig = {
  // apiKey是我们连接到firebase的方式
  apiKey: 'AIzaSyA26s4S5Q5fKNC-jjA04bUM1bu5lFszGzk',
  // authDomain是firebase提供的一个url，我们可以在其中发送身份验证信息
  authDomain: 'music-408a3.firebaseapp.com',
  projectId: 'music-408a3',
  //   storageBucket是文件存储的位置
  storageBucket: 'music-408a3.appspot.com',
  appId: '1:322975136315:web:e2fa8840d66095352bba1e'
}

// 初始化应用程序
// 它会返回一个我们可以用来与之通信的firebase实例
export default firebase.initializeApp(firebaseConfig)
