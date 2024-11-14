import "./Headline.css"
export default function Headline({ text }: { text: string }) {
  return (
    <h3 className="headline">{text}</h3>
  )
}