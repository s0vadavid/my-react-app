import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import { Pagination, Typography, Button } from "@mui/material";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  return (
    <div>
      <div className={styles.pagination}>
        <Pagination onChange={(event, num) => props.onPageChanged(num)} count={pagesCount} page={curP}></Pagination>
      </div>
      {props.users.map((u) => (
        <div className={styles.userItem} key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  onClick={() => {
                    props.unfollow(u.id);
                  }} 
                  color="error"
                  contained="contained"
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    props.follow(u.id);
                  }} 
                  color="success"
                  variant="contained"
                >
                  Follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div className={styles.nameString}><Typography variant="h4">{u.name}</Typography></div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;