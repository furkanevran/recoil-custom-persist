import { RecoilRoot, useRecoilTransactionObserver_UNSTABLE, RecoilState, RecoilValue } from 'recoil/dist/recoil.production';

interface IProps {
    children: any,
    persistAtoms: RecoilState<any>[]
}

function RecoilPersist ({children, persistAtoms} : IProps) {
    useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
        for (let index = 0; index < persistAtoms?.length ?? 0; index++) {
            const atom = persistAtoms[index] as RecoilValue<unknown>;
            localStorage.setItem(atom.key+'-persist', JSON.stringify(snapshot.getLoadable(atom).contents))
        }

    });

      return (
          <>
            {children}
         </>
      )
}


export default (props: IProps) => {

    const initState = (set) => {
        if(typeof window === 'undefined') return null

        for (let index = 0; index < props.persistAtoms?.length ?? 0; index++) {
            const atom = props.persistAtoms[index] as RecoilState<unknown>;
            const atomVal = JSON.parse(localStorage.getItem(atom.key+'-persist'))
            if(atomVal) {
                set(atom, atomVal)
            }
        }
}

        return (
            <RecoilRoot initializeState={({set}) => initState(set)}>
                <RecoilPersist persistAtoms={props.persistAtoms}>{props.children}</RecoilPersist>
            </RecoilRoot>
        )
}