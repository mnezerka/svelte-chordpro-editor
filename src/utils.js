 // Open a handle to an existing file on the local file system.
export function get_file_handle() {

    // For Chrome 86 and later...
    if ('showOpenFilePicker' in window) {
        const opts = {
            types: [
            {
                description: 'Chordpro',
                accept: {
                'text/plain': ['.txt']
                }
            },
            ],
            excludeAcceptAllOption: false,
            multiple: false
        };


        return window.showOpenFilePicker(opts).then((handles) => handles[0]);
    }

    // For Chrome 85 and earlier...
    const opts = {
        type: 'open-file',
        accepts: [{
          description: 'Chordpro text file',
          extensions: ['txt'],
          mimeTypes: ['text/plain'],
        }],
      };
    return window.chooseFileSystemEntries(opts);
}

 // Reads the raw text from a file handle.
 export function read_file(file) {
    // If the new .text() reader is available, use it.
    console.log("read_file", file);
    if (file.text) {
        console.log("returining text()");

        return file.text();
    } else {
        // Otherwise use the traditional file reading technique.
        let p = new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener("loadend", function() {
                console.log("loaded");
                // reader.result contains the contents of blob as a typed array
                // we insert content of file in DOM here
                resolve(reader.result);
             });

             /*
            reader.onload = function(e) {
                text = e.target.result
                resolve(text)
            };
            */
            console.log("before readAsText", file);
            reader.readAsText(file);
        });

        console.log("returining promise", p);
        return(p)
    }
}

 // Writes the contents to disk.
export function write_file(file_handle, contents) {

    // Support for Chrome 82 and earlier.
    if (file_handle.createWriter) {

        // Create a writer (request permission if necessary).
        file_handle.createWriter().then(function(writer) {

            // Write the full length of the contents
            writer.write(0, contents).then(function() {
                // Close the file and write the contents to disk
                return writer.close();
            });
        });

    } else {
        // For Chrome 83 and later.
        // Create a FileSystemWritableFileStream to write to.
        file_handle.createWritable().then(function(writable) {
            // Write the contents of the file to the stream.
            writable.write(contents).then(function() {
                // Close the file and write the contents to disk.
                return writable.close();
            });
        });
    }
  }