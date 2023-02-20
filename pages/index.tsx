import { Layout } from '@/components';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-black text-slate-300 flex flex-col flex-1 items-center justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl">
        Current Project
      </h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
