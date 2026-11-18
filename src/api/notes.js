import client from './client';

export const getNotes = () => client.get('/notes').then((r) => r.data.notes);
export const getNote = (id) => client.get(`/notes/${id}`).then((r) => r.data.note);
export const createNote = (data) => client.post('/notes', data).then((r) => r.data.note);
export const updateNote = (id, data) => client.put(`/notes/${id}`, data).then((r) => r.data.note);
export const deleteNote = (id) => client.delete(`/notes/${id}`);
