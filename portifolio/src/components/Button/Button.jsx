function Button({ children, variante = 'primario', onClick }) {
  return (
    <button
      type="button"
      className={`botao botao--${variante}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button