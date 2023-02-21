import { Layout } from '@/components';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <article className="bg-black flex flex-col flex-1 items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight leading-none text-slate-300 md:text-5xl lg:text-6xl sm:text-3xl">
        Current Project
      </h1>
    </article>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
