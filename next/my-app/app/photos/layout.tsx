export default function PhotosLayout({
  viewer,
  children,
}: Readonly<{
  viewer: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div className='container flex min-h-screen flex-col items-center justify-between p-24'>
      {viewer}
      {children}
    </div>
  );
}
