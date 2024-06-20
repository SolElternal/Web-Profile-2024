export default function blog() {
  return (
    <main className="container bg-blue-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*BLOG 1*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  As “Developers” indeed we are the student of the world
                </h2>
                <p className="text-gray-600 mb-10">
                  ในฐานะนักพัฒนาซอฟต์แวร์
                  แท้ที่จริงแล้วเราก็คือนักเรียนของโลกใบนี้เสมอ
                </p>
                <a
                  href="/blog/1"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </a>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2tYSCDFH-frWWb1veAV86Q.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>

          {/*BLOG 2*/}
          <article className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  The Art of Simplicity: Python’s Syntactic Sugar?
                </h2>
                <p className="text-gray-600 mb-10">
                  “ถ้าเราพูดถึง Code ที่ดี เราจะให้คำนิยามมันว่าอะไร?”
                </p>
                <a
                  href="/blog/2"
                  className="text-blue-500 hover:text-blue-700 font-bold"
                >
                  Read More
                </a>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*G-09XWU9P6bPCgSCu2wQKg.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
