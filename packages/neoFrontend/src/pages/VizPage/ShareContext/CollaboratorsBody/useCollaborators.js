import { useCallback, useContext } from 'react';
import { getVizCollaborators, addCollaboratorOp } from 'vizhub-presenters';
import { useValue } from '../../../../useValue';
import { RealtimeModulesContext } from '../../RealtimeModulesContext';
import { VizContext } from '../../VizContext';

export const useCollaborators = () => {
  const { viz$, submitVizInfoOp } = useContext(VizContext);
  const realtimeModules = useContext(RealtimeModulesContext);
  const collaborators = useValue(viz$, getVizCollaborators);

  const addCollaborator = useCallback(
    (userId) => {
      const collaborator = { userId };
      submitVizInfoOp(
        addCollaboratorOp({
          collaborators,
          collaborator,
          realtimeModules,
        })
      );
    },
    [submitVizInfoOp, realtimeModules, collaborators]
  );

  return { addCollaborator, collaborators };
};