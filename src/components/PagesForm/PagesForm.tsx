import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {Page} from "../../types";
import {useNavigate} from "react-router-dom";

const PagesForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [page, setPage] = useState({
    title: '',
    content: '',
  });

  const onIdChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    const pageResponse = await axiosApi.get<Page>('/' + value + '.json');
    setPage(pageResponse.data);
    setId(value);
  }

  const onPageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPage(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.put('/' + id + '.json', page);
    navigate('/pages/' + id);
  }

  return (
    <div className="border border-dark border-2 p-3 mt-2">
      <h3>Edit pages</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="id">Select page</label>
          <select id="id" name="id" className="form-control" value={id} onChange={onIdChange}>
            <option disabled value=""></option>
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="contacts">Contacts</option>
            <option value="login">Log in</option>
            <option value="reviews">Reviews</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="content" name="title" className="form-control" value={page.title} onChange={onPageChange}/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="content">content</label>
          <textarea id="content" name="content" className="form-control" value={page.content} onChange={onPageChange}/>
        </div>
        <button className="btn btn-primary mt-2" type="submit">Save</button>
      </form>
    </div>
  );
};

export default PagesForm;