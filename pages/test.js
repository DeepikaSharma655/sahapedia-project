import { useRouter } from 'next/router'
import Link from 'next/link'
function ReadMore() {
  const router = useRouter()

  return (
    <div><span onClick={() => router.push('/aboutsdfsdfds')}>Click here to read more</span><br/>
   <Link href={`${encodeURIComponent("My-name-is-khan-and-i-am-not-terrorist.php")}?city_id=80`}>
            <a>fdfsdfs</a>
          </Link>
   
   </div>
  )
}

export default ReadMore