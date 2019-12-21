import {
  DOCUMENT_CONTENT,
  DOCUMENT_INFO,
  fetchShareDBDoc
} from 'vizhub-database';
import { VisualizationInfo } from 'vizhub-entities';

// Populates request.vizInfo with the VisualitionInfo document
// corresponding to the document to which the op is being applied.
export const getVizInfo = connection => (request, done) => {
  const { collection, snapshot, snapshots, op } = request;

  // Do nothing in the case of create and delete ops.
  if (op && (op.create || op.del)) {
    return done();
  }

  // Query for viz info in case of op agains a viz content document.
  if (collection === DOCUMENT_CONTENT) {
    let id;

    if (snapshot) {
      id = snapshot.id;
    } else if (snapshots) {
      if(snapshots.length === 1){
        id = snapshots[0].id;
      } else {
        return done('Case of multiple content documents not handled')
      }
    }

    // Query for corresponding info document
    fetchShareDBDoc(DOCUMENT_INFO, id, connection).then(infoDoc => {
      request.vizInfo = new VisualizationInfo(infoDoc.data);
      done();
    });
  } else if (collection === DOCUMENT_INFO){
    // No need to query in case of op against a viz info document.
    if (snapshot) {
      request.vizInfo = new VisualizationInfo(snapshot.data);
    } else if (snapshots) {
      if(snapshots.length === 1){
        request.vizInfo = new VisualizationInfo(snapshots[0].data);
      } else {
        return done('Case of multiple info documents not handled')
      }
    }
    return done();
  }
};
