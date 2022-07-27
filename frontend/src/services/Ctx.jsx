import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ctxProvider = createContext();
const [users, setUsers] = useState([]);
const [category, setCategory] = useState([]);
const [channels, setChannels] = useState([]);
const [contents, setContents] = useState([]);
const [advenced, setAdvenced] = useState([]);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/users"}`)
    .then(({ data }) => {
      setUsers(data);
    });
}, []);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/users/channels"}`)
    .then(({ data }) => {
      setUsers(data);
    });
}, []);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/category"}`)
    .then(({ data }) => {
      setCategory(data);
    });
}, []);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/channels"}`)
    .then(({ data }) => {
      setChannels(data);
    });
}, []);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/contents"}`)
    .then(({ data }) => {
      setContents(data);
    });
}, []);

useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}${"/channels/contents"}`)
    .then(({ data }) => {
      setAdvenced(data);
    });
}, []);

export function CtxProvider({ children }) {
  return (
    <ctxProvider.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        users,
        category,
        channels,
        contents,
        advenced,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}
export default ctxProvider;

CtxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
