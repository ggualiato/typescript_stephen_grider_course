import { Router, Request, Response } from "express";
import { RequestWithBody } from "../interfaces/RequestWithBody";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="post">
        <div>
            <label>Email</label>
            <input name="email" />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "giovanni" && password === "hello") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
