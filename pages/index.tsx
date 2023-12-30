import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {PoweredBy} from "../components/PoweredBy/PoweredBy";
import {GitHub} from "../components/PoweredBy/GitHub";
import {GridLoader} from "react-spinners";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const MixtapeSearchPackNOSSR = dynamic(() => import('../components/MixtapeSearch/Searchbar'), { ssr: false });

const Home: NextPage = () => {
  
  return (
    <main>
      <div className={styles.container}>
        <h4 className={styles.title}>
          edit <code>`pages/index.tsx`</code> to begin.
        </h4>
      <MixtapeSearchPackNOSSR/>
      </div>
      <PoweredBy />
      <GitHub />
    </main>
  );
};

export default Home;