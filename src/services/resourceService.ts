// import api from "../helpers/api";

import {moment} from 'obsidian';
import {TFile} from 'obsidian';
import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
import useDailyNotesStore from '../stores/fileStore';
// import dailyNotesService from './dailyNotesService';

// interface FileData {
//   buffer: ArrayBuffer;
//   mimeType: string;
//   originalName: string;
// }

class ResourceService {
  /**
   * Upload resource file to server,
   * @param file file
   * @returns resource: id, filename
   */
  public async upload(file: File) {
    const {app} = useDailyNotesStore.getState();
    const {vault, fileManager} = app;

    const fileArray = await file.arrayBuffer();
    const ext = getExt(file.type);

    const dailyNotes = getAllDailyNotes();
    const date = moment();
    const existingFile = getDailyNote(date, dailyNotes);
    let newFile;
    if (!existingFile) {
      const dailyFile = await createDailyNote(date);
      newFile = await vault.createBinary(
        //@ts-expect-error, private method
        await vault.getAvailablePathForAttachments(`Pasted Image ${moment().format('YYYYMMDDHHmmss')}`, ext, dailyFile),
        fileArray,
      );
    } else if (existingFile instanceof TFile) {
      newFile = await vault.createBinary(
        //@ts-expect-error, private method
        await vault.getAvailablePathForAttachments(
          `Pasted Image ${moment().format('YYYYMMDDHHmmss')}`,
          ext,
          existingFile,
        ),
        fileArray,
      );
    }

    return {
      id: `Resource_${newFile.path}`,
      filename: newFile.path,
    };

    // const filePath = await vault.getAvailablePathForAttachments(fileName, "png", "");

    // const  reader = new FileReader();
    // reader.readAsArrayBuffer(file.arrayBuffer);
    // reader.onload = () =>{
    //   // console.log('RESULT', reader.result)
    //   fileArrary = reader.result;
    //   console.log(fileArrary);
    // }

    // if (size > 5 << 20) {
    //   return Promise.reject("超过最大文件大小 5Mb");
    // }

    // const formData = new FormData();

    // formData.append("file", file, filename);

    // const { data } = await api.uploadFile(formData);
  }
}

//eslint-disable-next-line
const getExt = (line: string) => /^image\/(.+)$/.exec(line)?.[1];

const resourceService = new ResourceService();

export default resourceService;
