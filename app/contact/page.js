import Blog from "@/components/Blog"
import Contact from "../../components/Contact"
import PopupWidget from "@/components/PopupWidget"
export default function ContactPage() {
  return (
    <main className="min-h-scree">
        <Contact/>
        <Blog/>
        <PopupWidget/>
    </main>
  )
}
