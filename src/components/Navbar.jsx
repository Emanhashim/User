import React from 'react'
import{BiSearch} from 'react-icons/bi';
import styled from 'styled-components';
export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Nav>
      <div className="title">
      <h4>{user.username}</h4>
      <h1>welcome to<span>Baz payment DASHBOARD</span></h1>
      </div>
      <div className="search">
        <BiSearch/>
      <input type="text" placeholder='Search'/>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
  justify-content: space-between;
  color: black;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: -7rem;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
  }
}
@media screen and (min-width: 580px) and (max-width: 520px) {
  flex-direction: column;
  .title {
    h1 {
      span {
        display: block;
        margin: 1rem 0;
        /* letter-spacing: 0; */
      }
    }

  }
  .search{
    span {
      display: block;
      margin: 1rem 0;
      /* letter-spacing: 0; */
    }
  }
}
`;
