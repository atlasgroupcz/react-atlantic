export type Type =
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';

export type TypeWithDocs = {
    /** default | primary | success | warning | error | info */
    type?: Type;
};
