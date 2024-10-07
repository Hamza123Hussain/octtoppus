export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="mb-6 text-2xl font-bold">Video Upload to Firebase</h1>
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/octtoppusadmin-62082.appspot.com/o/services.mp4?alt=media&token=e0d27844-c1ed-4825-bd2e-5d01ee234028"
            controls
            autoPlay
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
