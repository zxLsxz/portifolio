function Badge({ texto, cor = 'neutra' }) {
  return <span className={`etiqueta etiqueta--${cor}`}>{texto}</span>
}

export default Badge