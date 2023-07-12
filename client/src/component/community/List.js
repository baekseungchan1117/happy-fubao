import React from 'react';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS.js';
import { useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/ko';

export default function List(props) {
  console.log("1111111",props);
  const SetTime = (createdAt, updatedAt) => {  // 날짜 수정 생성 수정해야함
    const created = moment(createdAt);
    console.log("create111", created);
    const updated = moment(updatedAt);
    console.log("updated222", updated);
    if (created === updated) {
      return created.format('YYYY MMMM Do, hh:mm');
    } else {
      return `${updated.format('YYYY MMMM Do, hh:mm')}`;
    }
  };
  

  return (
    <ListDiv>
      {props.postList.map((post, idx) => (
        <ListItem key={idx}>
          <Link to={`detail/${post.id}`}>
            <p className="title">{post.title}</p>
            <p className="author">{post.nickname}</p>
            {post.img ? (
              <img src={post.img} alt="" style={{ width: "100%", height: "70%" }} />
            ) : null}
            <p>{post.content}</p>
            <p>{SetTime(post.createdAt, post.updatedAt)}</p>
          </Link>
        </ListItem>
      ))}
    </ListDiv>
  );
}
