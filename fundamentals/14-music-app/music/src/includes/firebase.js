import firebase from 'firebase/app'
// ⬇️ 我们不用写库名也能智能地导入
import 'firebase/auth'
// 如果我们想用数据库交互的方法，就要导入fire store了
import 'firebase/firestore'

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
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
// firestore()函数将返回一个具有与数据库交互的方法和属性的对象
const db = firebase.firestore()

export { auth, db }
