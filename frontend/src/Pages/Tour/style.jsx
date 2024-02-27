import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleContainer = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  color: white;

  h1 {
    font-weight: 700;
    font-size: 50px;
  }

  P {
    font-weight: 500;
    font-size: 20px;
  }

  @media (max-width: 700px) {
    padding: 2em;
    text-align: center;
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ShowsContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 5em 0em;
  background-color: #ebebeb;
`;

export const CardShow = styled(Link)`
  border-radius: 8px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  display: flex;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export const CardContent = styled.div`
  width: 350px;
  padding: 3em 2em;

  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0.3em;
    color: #101c34;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em 2em 2em 2em;
    width: 300px;
    gap: 2em;
  }

  @media (max-width: 700px) {
    h6 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Data = styled.div`
  background-color: #056de0;
  color: white;
  border-radius: 8px;
  width: 50px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1em;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  h2 {
    font-size: 14px;
    font-weight: 300;
  }

  h3 {
    font-size: 12px;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 12px;
    }

    h3 {
      font-size: 10px;
    }
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0.3em;
    color: #101c34;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    h4 {
      font-size: 14px;
    }

    h5 {
      font-size: 10px;
    }
  }
`;

export const ImgCard = styled.div`
  width: 300px;
  height: 270px;
  border-radius: 0px 8px 8px 0px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1)
    ),
    url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    border-radius: 8px 8px 0px 0px;
    width: 300px;
    height: 150px;
  }
`;

export const Button = styled(Link)`
  background-color: #056de0;
  color: white;
  width: 100px;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.5em;
  text-align: center;

  &:hover {
    background-color: white;
    color: #056de0;
  }
`;
