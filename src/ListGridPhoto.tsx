export default function ListGridPhoto({file}: {file: File}) {
  const photoUrl = window.URL.createObjectURL(file);

  return (
    <img src={photoUrl} onLoad={() => {
      window.URL.revokeObjectURL(photoUrl);
    }}></img>
  )
}