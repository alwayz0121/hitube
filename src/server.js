//server.js 역할 : express와, server의 configuration에 관련된 코드만 처리하자

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

//express application을 만들겠습니다!
// application 생성 => application 설정(get request에 응답하는 방법 ....) => 외부 접속을 listen & 외부에 개방

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
//express application이 form의 value를 이해하고 JS 형식으로 변경해주는 미들웨어
//이 이후로부터 req.body를 사용할 수 있음
app.use(express.urlencoded({ extended: true }));
//Router 생성
app.use("/", globalRouter); // /로 시작하는 url을 찾으면 globalRouter로
app.use("/users", userRouter); // /users로 시작하는 url을 찾으면 userRouter로
app.use("/videos", videoRouter); // /videos로 시작하는 url을 찾으면 videoRouter로

export default app;
