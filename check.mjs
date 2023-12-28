import fs from 'fs/promises';
import path from 'path';

const sourceFilePath = path.join(new URL('.', import.meta.url).pathname, '.env.example');
const destinationFilePath = path.join(new URL('.', import.meta.url).pathname, '.env');

// 检查目标文件是否存在
(async () => {
  try {
    await fs.access(destinationFilePath);
    console.log('.env文件已存在');
  } catch (err) {
    // 目标文件不存在，复制.en.example文件为.env文件
    try {
      await fs.copyFile(sourceFilePath, destinationFilePath);
      console.log('.env文件已成功创建');
    } catch (error) {
      console.error('复制文件时出错:', error);
    }
  }
})();
