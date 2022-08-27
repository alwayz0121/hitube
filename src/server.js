import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//express application을 만들겠습니다!
// application 생성 => application 설정(get request에 응답하는 방법 ....) => 외부 접속을 listen & 외부에 개방
const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

//Router 생성
app.use("/", globalRouter); // /로 시작하는 url을 찾으면 globalRouter로
app.use("/users", userRouter); // /users로 시작하는 url을 찾으면 userRouter로
app.use("/videos", videoRouter); // /videos로 시작하는 url을 찾으면 videoRouter로

//서버 = 너의 요청(request)을 listening함(24시간 내내 연결되어 있음)

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
